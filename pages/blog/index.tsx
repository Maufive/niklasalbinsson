/* eslint-disable import/no-extraneous-dependencies */
import { useState, ChangeEvent } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { AnimatePresence } from 'framer-motion';
import { pick } from '@contentlayer/client';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';

import PostList from 'components/blog/post-list';
import PageHeader from 'components/page-header';
import Page from 'components/page/page';
import Input from 'components/input';
import BlogPost from 'components/blog/post';

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Page>
      <PageHeader
        title="Blog"
        description="I write about Javascript, animations, CSS and more!"
      >
        <Input
          type="search"
          value={searchTerm}
          onChange={onChangeSearch}
          placeholder="Search posts"
          ariaLabel="Search blog posts"
        />
      </PageHeader>
      <PostList
        title={searchTerm ? 'Search results' : 'All posts'}
        posts={searchTerm ? filteredBlogPosts : posts}
      />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const posts = allPosts
    .map((post) =>
      pick(post, ['slug', 'title', 'summary', 'publishedAt', 'readingTime'])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return {
    props: { posts },
  };
};

export default Blog;
