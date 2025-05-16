import { useState, useRef  } from 'react';
import api from '../../services/api';
import { Editor } from '@tinymce/tinymce-react';

const CreateBlogForm = () => {
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

  const fileInputRef = useRef(null);
  const editorRef = useRef(null);

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'featuredImage') {
      setFormData({ ...formData, featuredImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEditorChange = (content) => {
    setFormData((prevData) => ({ ...prevData, content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const payload = new FormData();
      for (const key in formData) {
        if (key === 'keywords' || key === 'categories' || key === 'tags') {
          payload.append(key, formData[key].split(',').map(str => str.trim()));
        } else {
          payload.append(key, formData[key]);
        }
      }

      

    await api.post('/blogs', payload)

      console.log(formData);
      console.log(payload);

      
      

      setMessage('Blog created successfully!');
      
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
      fileInputRef.current.value = null;
    } catch (err) {
      setMessage(err.response?.data?.error || 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Blog</h2>
      {message && <div className="mb-4 text-sm text-red-500">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          ['Title', 'title'],
          ['Meta Title', 'meta_title'],
          ['Meta Description', 'meta_description'],
          ['Excerpt', 'excerpt'],
          // ['Content', 'content'],
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
              rows={name === 'content' ? 6 : 2}
              className="w-full border rounded p-2"
              required={['title', 'meta_title', 'meta_description', 'content'].includes(name)}
            />
          </div>
        ))}

        <div>
           <Editor
          apiKey="huens675y3x2jk7vhyp5g3m4tbfcehhzmufrp75cw3tnb0bj"
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue=""
          value={formData.content}
          init={{
            height: 400,
            menubar: false,
             plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          // Your account includes a free trial of TinyMCE premium features
          // Try the most popular premium features until May 30, 2025:
          'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'mentions', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
        ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help'
          }}
          onEditorChange={handleEditorChange}
        />
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
          {submitting ? 'Submitting...' : 'Create Blog'}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
