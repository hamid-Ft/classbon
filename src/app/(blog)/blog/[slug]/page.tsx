const BlogDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return (
    <div className="flex justify-center items-center text-5xl w-full">
      <h1>{slug}</h1>
    </div>
  );
};

export default BlogDetails;
