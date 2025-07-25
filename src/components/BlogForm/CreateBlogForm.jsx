import { useState, useRef, useEffect, useMemo } from 'react';
import api from '../../services/api';
import { Editor } from '@tinymce/tinymce-react';
import CSKEditor from './CSKEditor';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import {
//   ClassicEditor,
//   AutoLink,
//   Autosave,
//   BalloonToolbar,
//   BlockQuote,
//   Bold,
//   Bookmark,
//   Code,
//   CodeBlock,
//   Essentials,
//   Heading,
//   Highlight,
//   HorizontalLine,
//   Indent,
//   IndentBlock,
//   Italic,
//   Link,
//   List,
//   Paragraph,
//   Strikethrough,
//   Table,
//   TableCellProperties,
//   TableProperties,
//   TableToolbar,
//   Underline,
//   Image,
//   ImageToolbar,
//   ImageCaption,
//   ImageStyle,
//   ImageUpload,
//   ImageInsert
// } from 'ckeditor5';
// import 'ckeditor5/ckeditor5.css';

const CreateBlogForm = () => {
  const fileInputRef = useRef(null);
  const editorContainerRef = useRef(null);
	const editorRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    meta_title: '',
    meta_description: '',
    keywords: '',
    categories: '',
    tags: '',
    excerpt: '',
    content: '',
    status: 'draft',
    featuredImage: null,
  });

  const [blogList, setBlogList] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [selectedBlogId, setSelectedBlogId] = useState(null); // for edit mode

  useEffect(() => {
    fetchBlogList();
  }, []);

  const fetchBlogList = async () => {
    try {
      const res = await api.get('/blogs');
      setBlogList(res.data.data || []);
    } catch (err) {
      console.error('Failed to fetch blog list');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      try {
        await api.delete(`/blogs/${id}`);
        fetchBlogList();
        if (selectedBlogId === id) {
          resetForm(); // If currently editing the deleted blog
        }
      } catch (err) {
        console.error('Failed to delete blog');
      }
    }
  };

  const handleEdit = (blog) => {
    const blogCategory = blog?.categories.some(cat => cat.includes("[")) ? JSON.parse(blog?.categories).join(", ") : blog?.categories
    const blogTags = blog?.tags.some(tag => tag.includes("[")) ? JSON.parse(blog?.tags).join(", ") : blog?.tags
    const blogKeywords = blog?.keywords.some(keyword => keyword.includes("[")) ? JSON.parse(blog?.keywords).join(", ") : blog?.keywords


    setSelectedBlogId(blog._id);
    setFormData({
      title: blog.title || '',
      meta_title: blog.meta_title || '',
      meta_description: blog.meta_description || '',
      keywords: blogKeywords || '',
      categories: blogCategory || '',
      tags: blogTags || '',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      status: blog.status || 'draft',
      featuredImage: null, // Will upload new only if selected
    });

    fileInputRef.current.value = null;
    editorRef.current?.setContent(blog.content || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'featuredImage') {
      setFormData({ ...formData, featuredImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();

    setFormData((prev) => ({ ...prev, content: data }));
  };


  const resetForm = () => {
    setFormData({
      title: '',
      meta_title: '',
      meta_description: '',
      keywords: '',
      categories: '',
      tags: '',
      excerpt: '',
      content: '',
      status: 'draft',
      featuredImage: null,
    });
    setSelectedBlogId(null);
    fileInputRef.current.value = null;
    setMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const payload = new FormData();
      for (const key in formData) {
        if (['keywords', 'categories', 'tags'].includes(key)) {
          payload.append(key, JSON.stringify(formData[key].split(',').map((s) => s.trim())));
        } else if (key === 'featuredImage' && formData[key]) {
          payload.append(key, formData[key]);
        } else {
          payload.append(key, formData[key]);
        }
      }

      if (selectedBlogId) {
        await api.put(`/blogs/${selectedBlogId}`, payload);
        setMessage('Blog updated successfully!');
      } else {
        await api.post('/blogs', payload);
        setMessage('Blog created successfully!');
      }

      fetchBlogList();
      resetForm();
    } catch (err) {
      setMessage(err.response?.data?.error || 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full mx-auto p-10">
       <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{selectedBlogId ? 'Edit Blog' : 'Create Blog'}</h1>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4"></h2>
        {message && <div className="mb-4 text-sm text-red-500">{message}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            ['Title', 'title'],
            ['Meta Title', 'meta_title'],
            ['Meta Description', 'meta_description'],
            ['Excerpt', 'excerpt'],
            ['Keywords (comma-separated)', 'keywords'],
            ['Categories (comma-separated)', 'categories'],
            ['Tags (comma-separated)', 'tags'],
          ].map(([label, name]) => (
            <div key={name}>
              <label className="block text-sm font-medium">{label}</label>
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleChange}
                rows={2}
                className="w-full border rounded p-2"
              />
            </div>
          ))}

          <div>
            {/* <Editor
              apiKey="huens675y3x2jk7vhyp5g3m4tbfcehhzmufrp75cw3tnb0bj" // or remove this line if using without API key
              onInit={(evt, editor) => (editorRef.current = editor)}
              value={formData.content}
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  'advlist',     // enhanced lists
                  'autolink',
                  'lists',
                  'link',
                  'image',
                  'charmap',
                  'preview',
                  'anchor',
                  'searchreplace',
                  'visualblocks',
                  'code',
                  'fullscreen',
                  'insertdatetime',
                  'table',
                  'help',
                  'wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | ' +
                  'bullist numlist outdent indent | link image table | code preview fullscreen | help',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              }}
              onEditorChange={handleEditorChange}
            /> */}

          </div>

          <div>
            <CSKEditor onChange={handleEditorChange}  data={formData.content}
              onReady={(editor) => {
                editorRef.current = editor;
              }} />
            {/* <CKEditor
              editor={ClassicEditor}
              config={{
                licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODE5OTk5OTksImp0aSI6Ijk0NTA4MmVhLTQ2ZTctNDNiMC1hODU4LWVjMTQzMGVlYmQ2ZiIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIiwiRTJQIiwiRTJXIl0sInZjIjoiMGI5NWYzZDcifQ.v6wCpBO_Zww1mAUbQfC6UQ3y8QuitqOTSg0CzF4nsB5KWN5x3DSK8eB-wQh_qo7yBykuXjbL9EaidAO81E_Dig', // Or 'GPL'.
                plugins: [
                  AutoLink,
                  Autosave,
                  BalloonToolbar,
                  BlockQuote,
                  Bold,
                  Bookmark,
                  Code,
                  CodeBlock,
                  Essentials,
                  Heading,
                  Highlight,
                  HorizontalLine,
                  Indent,
                  IndentBlock,
                  Italic,
                  Link,
                  List,
                  Paragraph,
                  Strikethrough,
                  Table,
                  TableCellProperties,
                  TableProperties,
                  TableToolbar,
                  Underline,
                  Image,
                  ImageToolbar,
                  ImageCaption,
                  ImageStyle,
                  ImageUpload,
                  ImageInsert,
                ],
                toolbar: [
                  'undo',
                  'redo',
                  '|',
                  'heading',
                  '|',
                  'bold',
                  'italic',
                  'underline',
                  '|',
                  'bulletedList',
                  'numberedList',
                  '|',
                  'link',
                  'insertTable',
                  'highlight',
                  'blockQuote',
                  'codeBlock',
                  '|',
                  'outdent',
                  'indent'
                ],
                balloonToolbar: ['bold', 'italic', '|', 'link'],
                heading: {
                  options: [
                    {
                      model: 'paragraph',
                      title: 'Paragraph',
                      class: 'ck-heading_paragraph'
                    },
                    {
                      model: 'heading1',
                      view: 'h1',
                      title: 'Heading 1',
                      class: 'ck-heading_heading1'
                    },
                    {
                      model: 'heading2',
                      view: 'h2',
                      title: 'Heading 2',
                      class: 'ck-heading_heading2'
                    },
                    {
                      model: 'heading3',
                      view: 'h3',
                      title: 'Heading 3',
                      class: 'ck-heading_heading3'
                    },
                    {
                      model: 'heading4',
                      view: 'h4',
                      title: 'Heading 4',
                      class: 'ck-heading_heading4'
                    },
                    {
                      model: 'heading5',
                      view: 'h5',
                      title: 'Heading 5',
                      class: 'ck-heading_heading5'
                    },
                    {
                      model: 'heading6',
                      view: 'h6',
                      title: 'Heading 6',
                      class: 'ck-heading_heading6'
                    }
                  ]
                },
                menuBar: {
                  isVisible: true
                },
                table: {
                  contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
                },
                  image: {
                    toolbar: [
                      'imageTextAlternative',
                      'imageStyle:full',
                      'imageStyle:side'
                    ]
                  },
                initialData: '<p>Hello from CKEditor 5 in React!</p>',
              }}

              data={formData.content}
              onReady={(editor) => {
                editorRef.current = editor;
              }}
              onChange={handleEditorChange}
            /> */}
          </div>

          <div>
            <label className="block text-sm font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Featured Image</label>
            <input
              type="file"
              name="featuredImage"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded p-2"
              ref={fileInputRef}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {submitting ? 'Submitting...' : selectedBlogId ? 'Update Blog' : 'Create Blog'}
          </button>
          {selectedBlogId && (
            <button
              type="button"
              onClick={resetForm}
              className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>

      {/* Table */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">All Blogs</h2>
        {blogList.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Title</th>
                  <th className="border p-2">Status</th>
                  <th className="border p-2">Created</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogList.map((blog) => (
                  <tr key={blog._id}>
                    <td className="border p-2">{blog.title}</td>
                    <td className="border p-2 capitalize">{blog.status}</td>
                    <td className="border p-2">{new Date(blog.createdAt).toLocaleDateString()}</td>
                    <td className="border p-2 flex gap-2">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateBlogForm;
