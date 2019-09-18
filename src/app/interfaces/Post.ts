export interface IPost {

  post: string;
  likes: number;
  dislikes: number;
  trash: number;
  author: {
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
