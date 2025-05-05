// src/app/blog-details/[...id]/page.tsx
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Breadcrumb from "@/components/common/Breadcrumb";
import blog_data from "@/data/BlogData";
import Wrapper from "@/layout/Wrapper";

// Define the type for the page props, only including params (which is a Promise)
interface BlogDetailsPageProps {
  params: Promise<{ id: string[]; }>; // params is a Promise resolving to { id: string[] }
  // Removed searchParams as they are incompatible with static export of this route
}

export const metadata = {
   title: "Blog Details Xeco - ICO & Crypto Landing Page React Next js Template",
};

// Async function to generate static params for all blog posts
export async function generateStaticParams() {
  return blog_data.map((item) => ({
    id: [item.id.toString()], // Assuming /blog-details/ID structure
  }));
}


// The page component is async to await the params Promise
// Removed searchParams from the function signature
const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {

   // Await the params Promise
   const awaitedParams = await params;

   // Removed: Awaiting searchParams is no longer needed
   // const awaitedSearchParams = await searchParams;

   // Access the id array from the awaited params object
   const blogIdSegment = awaitedParams.id[awaitedParams.id.length - 1];

   const blogIdNumber = Number(blogIdSegment); // Convert the segment to a number

   const single_blog = blog_data.find((item) => Number(item.id) === blogIdNumber);

   if (!single_blog) {
       // This block should ideally not be reached for statically generated pages
       return (
         <Wrapper>
            <main>
               <Breadcrumb title="Blog Not Found" />
               <div className="container mt-5 mb-5">
                  <p>The requested blog post could not be found.</p>
               </div>
            </main>
         </Wrapper>
       );
   }

   return (
      <Wrapper>
         <main>
            <Breadcrumb title={single_blog.title || "Blog Details"} />
            <BlogDetailsArea single_blog={single_blog} key={single_blog.id} />
         </main>
      </Wrapper>
   )
}

export default BlogDetailsPage;