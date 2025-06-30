import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import SelectedInput from "../../components/SelectedInput/SelectedInput";
import styles from "./css/Profile.module.css";
import { createPost, getPosts, getTags } from "../../features/post/postAction";
import { useDispatch, useSelector } from "react-redux";
import type { CreatePostRequest } from "../../types/Post/post.request.type";
import ProfileTable from "../../components/ProfileTable/ProfileTable";



const Profile = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.post.posts);
  const allTags = useSelector((state: any) => state.post.tags);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    dispatch(getTags() as any);
    dispatch(getPosts() as any);
  }, []);


  const handleCreatePost = () => {
    const payload: CreatePostRequest = {
      title,
      description,
      tags: selectedTags,
    }
    dispatch(createPost(payload) as any);
  }

  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_container_header}>
        <div className={styles.profile_container_header_button}>
          <Button type="button" children="Thêm mới" disabled={false} onClick={handleCreatePost} />
        </div>
 
        <div className={styles.profile_container_header_input}>
          <InputField type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} label="" />
          <InputField type="textarea" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} label="" />
          <SelectedInput
            allOptions={allTags}
            selected={selectedTags}
            onChange={setSelectedTags}
            placeholder="Thêm Tag"
          />
        </div>
        
      </div>
      <ProfileTable posts={posts} />
    </div>
  );
};

export default Profile;
