import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BLOG_POSTS, type BlogPost } from "@/features/dropshipping/data/blog-data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Route = createFileRoute("/dropship/blog")({
  component: BlogPage,
});

export function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost>(BLOG_POSTS[0]);

  return (
    <ScrollArea className="h-full">
      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <Badge className="bg-purple-600 text-white font-bold text-[10px]">
            Dropship Blog
          </Badge>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Kinh Nghiệm Thực Chiến & Case Studies
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-3">
            {BLOG_POSTS.map((post) => (
              <Card
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className={`p-4 border transition-all cursor-pointer rounded-xl ${
                  selectedPost.id === post.id
                    ? "border-purple-500 bg-purple-500/5 shadow-xs"
                    : "border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono mb-1">
                  <span>{post.date}</span>
                  <Badge variant="outline" className="text-[9px]">{post.category}</Badge>
                </div>
                <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-200 line-clamp-2">
                  {post.title}
                </h4>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-8">
            <Card className="p-8 border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl space-y-6 shadow-xs">
              <div className="space-y-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <Badge variant="outline" className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 font-bold">
                  {selectedPost.category}
                </Badge>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {selectedPost.title}
                </h2>
                <div className="text-xs text-zinc-400 font-mono">Đăng ngày {selectedPost.date}</div>
              </div>

              <div className="prose dark:prose-invert max-w-none text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selectedPost.content}
                </ReactMarkdown>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
