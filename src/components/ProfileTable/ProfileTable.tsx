import { memo, useEffect, useState } from "react";
import styles from "./css/ProfileTable.module.css";
import { FaArrowLeft, FaArrowRight, FaPencilAlt, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPosts, updatePost, getTags } from "../../features/post/postAction";
import SelectedInput from "../SelectedInput/SelectedInput";
import type { PostsResponse } from "../../types/Post/post.response.type";

interface ProfileTableProps {
  posts: PostsResponse | null;
}

interface PostFormData {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

const ProfileTable = ({ posts }: ProfileTableProps) => {
  const isDeletePost = useSelector((state: any) => state.post.isDeletePost);
  const isUpdatePost = useSelector((state: any) => state.post.isUpdatePost);
  const tags = useSelector((state: any) => state.post.tags) || [];
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<PostFormData>({
    id: "",
    title: "",
    description: "",
    tags: [],
  });

  const normalizeTags = (tags: any[]): string[] => {
    return tags
      ?.map((tag) => {
        if (typeof tag === "string") return tag;
        if (typeof tag === "object" && tag !== null && "tag" in tag) return tag.tag;
        return "";
      })
      .filter(Boolean);
  };

  useEffect(() => {
    dispatch(getTags() as any);
    dispatch(getPosts(currentPage) as any);
  }, [dispatch, currentPage]);

  console.log(posts);
  useEffect(() => {
    if (isDeletePost || isUpdatePost) {
      dispatch(getPosts(currentPage) as any);
    }
  }, [isDeletePost, isUpdatePost, dispatch, currentPage]);

  const handleEditPost = (post: any) => {
    setFormData({
      id: post.id,
      title: post.title,
      description: post.description,
      tags: normalizeTags(post.tags),
    });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormData({ id: "", title: "", description: "", tags: [] });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagsChange = (selectedTags: string[]) => {
    setFormData((prev) => ({
      ...prev,
      tags: selectedTags,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updatePost(formData) as any);
    handleModalClose();
  };

  const handleDeletePost = (id: string) => {
    dispatch(deletePost(id) as any);
  };

  const handleNextPage = () => {
    if (currentPage < (posts?.total_page || 1)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.profile_table_container}>
      <table className={styles.profile_table}>
        <thead>
          <tr className={styles.profile_table_header}>
            <th>STT</th>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts?.posts && posts.posts.length > 0 ? (
            posts.posts.map((post, index) => (
              <tr key={post.id || index} className={styles.profile_table_row}>
                <td>{(currentPage - 1) * posts.page_size + index + 1}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                  {normalizeTags(post?.tags || []).map((tag, idx) => (
                    <span key={tag + idx} className={styles.profile_table_tag}>
                      {tag}
                    </span>
                  ))}
                </td>
                <td className={styles.profile_table_action}>
                  <button
                    className={styles.profile_table_button}
                    onClick={() => handleEditPost(post)}
                  >
                    <FaPencilAlt size={18} />
                  </button>
                  <button
                    className={styles.profile_table_button}
                    onClick={() => handleDeletePost(post.id)}
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className={styles.profile_table_row}>
              <td colSpan={5} className={styles.profile_table_empty}>
                Không có bài viết
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={styles.profile_table_pagination}>
        <button
          className={styles.profile_table_button_pagination}
          onClick={handlePrevPage}
          disabled={currentPage <= 1}
        >
          <FaArrowLeft size={18} />
        </button>
        <span className={styles.profile_table_page_number}>
          {currentPage}/{posts?.total_page}
        </span>
        <button
          className={styles.profile_table_button_pagination}
          onClick={handleNextPage}
          disabled={currentPage >= (posts?.total_page || 1)}
        >
          <FaArrowRight size={18} />
        </button>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <h2>Chỉnh sửa bài viết</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.form_group}>
                <label>Tiêu đề</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.form_group}>
                <label>Mô tả</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.form_group}>
                <label>Tags</label>
                <SelectedInput
                  allOptions={tags}
                  selected={formData.tags}
                  onChange={handleTagsChange}
                  placeholder="Chọn tags"
                />
              </div>
              <div className={styles.modal_actions}>
                <button type="submit" className={styles.submit_button}>
                  Lưu
                </button>
                <button
                  type="button"
                  className={styles.cancel_button}
                  onClick={handleModalClose}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ProfileTable);
