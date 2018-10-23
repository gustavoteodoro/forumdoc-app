export default function mediaResolver(media) {
  return {
    id: media.id,
    slug: media.slug,
    media_details: media.media_details,
    source_url: media.source_url
  };
};
