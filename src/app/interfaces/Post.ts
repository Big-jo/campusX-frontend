export interface IPost {
  likes: number;
  dislikes: number;
  trash: number;
  post: string;
  video: string;
  image: string;
  text: string;
  author: {
    _id: string;
    name: string,
    userTag: string;
    userProfile: {
    avatar: string,
    gender: string,
    level: number,
    rep_points: number,
    university: string,
  };
};
  createdAt: string;
  likedBy: string[];
  _id: string;
}
