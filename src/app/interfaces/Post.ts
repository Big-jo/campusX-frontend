export interface IPost {
  likes: number;
  dislikes: number;
  trash: number;
  post: string;
  videoSrc: string;
  author: {
    _id: string;
    name: string,
    userProfile: {
    avatar: string,
    gender: string,
    level: number,
    rep_points: number,
    university: string,
    userTag: string;
  };
};
  createdAt: string;
  likedBy: string[];
  _id: string;
}
