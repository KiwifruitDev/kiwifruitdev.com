export type PostProps = {
  title: string;
  description: string;
  slug: string;
  category: string;
  excerpt: string;
  date?: string;
};

export class Post {
  title: string;
  description: string;
  slug: string;
  category: string;
  excerpt: string;
  date?: string;

  constructor(props: PostProps) {
    this.title = props.title;
    this.description = props.description;
    this.slug = props.slug;
    this.category = props.category;
    this.excerpt = props.excerpt;
    this.date = props.date;
  }

  get path() {
    return `/posts/${this.category}/${this.slug}`;
  }

  get formattedDate() {
    if (!this.date) {
      return undefined;
    }

    const date = new Date(this.date);
    if (Number.isNaN(date.valueOf())) {
      return this.date;
    }

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  static filterByCategory(posts: Post[], category: string) {
    return posts.filter((post) => post.category === category);
  }
}
