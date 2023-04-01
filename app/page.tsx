import Page from 'components/page/page';
import { PostList } from 'components/blog';
import { InternalLink } from 'components/links';
import { FeaturedProjectCard } from 'components/featured-project-card';
import { allPosts } from 'contentlayer/generated';

export default function Home() {
  const posts = allPosts
    .filter((post) => !post.archived)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 3);

  return (
    <Page>
      <div className="prose prose-invert sm:prose-invert lg:prose-lg sm:mb-20">
        <h1 className="font-serif text-3xl font-bold">
          Hi there, I'm Niklas. <br /> A curious software developer who's trying
          to get a little better every day
        </h1>
        <p className="text-zinc-300">
          I'm currently working as a developer at ComeOn Group. This is my
          personal website - a place for me to share my personal projects,
          thoughts and ideas.
        </p>
        <InternalLink href="/about">Learn more about me</InternalLink>
      </div>

      <section className="flex flex-col">
        <div className="mb-6">
          <h2 className="font-serif text-2xl font-bold">Featured Project</h2>
        </div>

        <div className="px-2 lg:px-0">
          <FeaturedProjectCard
            link="/projects/emoji-picker"
            title="Emoji Picker ✨"
            description="Making it easy to bring more fun into your daily writing. This macOS app is made to make it simpler to add emojis to your texts."
            stack={['TypeScript', 'Electron', 'React']}
          />
        </div>
      </section>

      <PostList title="Latest posts" posts={posts}>
        <InternalLink href="/blog">All posts</InternalLink>
      </PostList>
    </Page>
  );
}
