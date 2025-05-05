// src/app/blog-details/[...id]/page.tsx
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Breadcrumb from "@/components/common/Breadcrumb";
import blog_data from "@/data/BlogData";
import Wrapper from "@/layout/Wrapper";

// Define the type for the page props, acknowledging both params and searchParams are Promises
interface BlogDetailsPageProps {
  params: Promise<{ id: string[]; }>; // params is a Promise resolving to { id: string[] }
  // searchParams is also a Promise resolving to the search params object
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const metadata = {
   title: "Blog Details Xeco - ICO & Crypto Landing Page React Next js Template",
};

// The page component is async to await the Promises
const BlogDetailsPage = async ({ params, searchParams }: BlogDetailsPageProps) => {

   // Await both promises
   const awaitedParams = await params;
   const awaitedSearchParams = await searchParams; // Await searchParams

   // Access the id array from the awaited params object
   const blogIdSegment = awaitedParams.id[awaitedParams.id.length - 1]; // Get the last segment

   const blogIdNumber = Number(blogIdSegment); // Convert the segment to a number

   const single_blog = blog_data.find((item) => Number(item.id) === blogIdNumber);

   // You can now also use awaitedSearchParams if needed
   // const searchTerm = awaitedSearchParams.q;

   if (!single_blog) {
       // Handle case where blog is not found
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