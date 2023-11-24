import React from 'react';
import { MoreVert } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { RandomPost } from '../../helpers/types/api';

interface PostProps {
  post: RandomPost;
}

export default function PostCard({ post }: PostProps) {
  const { t } = useTranslation();
  const { image, likes, text, publishDate, owner } = post;

  return (
    <Box
      p={3}
      className="w-full rounded-xl shadow-card mx-0 my-8"
    >
      <Box className="flex items-center justify-between cursor-pointer">
        <Box className="flex align-center">
          <img
            loading="lazy"
            src={image}
            aria-label={`${t('a11y.postOwnerImage')}-${owner.firstName} ${owner.lastName}`}
            className="w-9 h-9 rounded-full object-cover"
            alt={`${t('a11y.postOwnerImage')}-${owner.firstName} ${owner.lastName}`}
          />

          <figcaption className="text-base font-bold my-0 mx-2.5 flex items-center">{`${owner.firstName} ${owner.lastName}`}</figcaption>

          <time className="text-zinc-500	text-xs flex items-center">
            {new Date(publishDate).toLocaleString('en-GB', { timeZone: 'UTC' })}
          </time>
        </Box>

        <MoreVert />
      </Box>

      <Box
        mx={0}
        my={5}
      >
        <figcaption>{text}</figcaption>

        <img
          loading="lazy"
          src={image}
          aria-label={t('a11y.postImage')}
          className="mt-5 w-full max-h-[112rem] object-contain"
          alt={t('a11y.postImage')}
        />
      </Box>

      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <img
            loading="lazy"
            className="w-6 h-6 mr-1.5 cursor-pointer"
            src="/assets/like.png"
            aria-label={t('a11y.likePost')}
            // onClick={likeHandler}
            alt={t('a11y.likePost')}
          />

          <img
            loading="lazy"
            className="w-6 h-6 mr-2.5 cursor-pointer"
            src="/assets/heart.png"
            aria-label={t('a11y.favoritePost')}
            // onClick={likeHandler}
            alt={t('a11y.favoritePost')}
          />

          <p className="text-sm">
            {likes} <u>{t('components.post.people')}</u> {t('components.post.likeThis')}
          </p>
        </Box>

        <p className="cursor-pointer text-sm">
          {likes} {t('components.post.comments')}
        </p>
      </Box>
    </Box>
  );
}