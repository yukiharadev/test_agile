import type { PostsResponse } from "../../types/Post/post.response.type";
import { memo } from "react";
import styles from "./css/ProfileTable.module.css";
import { FaPencilAlt , FaTrash  } from "react-icons/fa";


interface ProfileTableProps {
  posts: PostsResponse | null;
}



const ProfileTable = ({ posts }: ProfileTableProps) => {
    const handleDeletePost = (id: string) => {
        console.log(id);
    }
    const handleUpdatePost = (id: string) => {
        console.log(id);
    }
    return (
    <div className={styles.profile_table_container}>
      <table className={styles.profile_table}>
        <thead>
          <tr className={styles.profile_table_header}>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts?.posts && posts.posts.length > 0 ? (
            posts.posts.map((post) => (
              <tr key={post.id} className={styles.profile_table_row}>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                    {post.tags.map((tag) => (
                        <span key={tag} className={styles.profile_table_tag}>{tag}</span>
                    ))}
                </td>       
                <td className={styles.profile_table_action}>
                    <button className={styles.profile_table_button} onClick={() => handleDeletePost(post.id)}>
                        <FaTrash size={18} />
                    </button>
                    <button className={styles.profile_table_button} onClick={() => handleUpdatePost(post.id)}>
                        <FaPencilAlt size={18} />
                    </button>
                </td>
                 
              </tr>
            ))
          ) : (
            <tr className={styles.profile_table_row}>
              <td colSpan={4} className={styles.profile_table_empty}>Không có bài viết</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default memo(ProfileTable);