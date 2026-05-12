import mongoose from "mongoose";

const FaqSchema = new mongoose.Schema(
  {
    question: { type: String, trim: true, default: "" },
    answer: { type: String, trim: true, default: "" },
  },
  { _id: false }
);

const BlogSchema = new mongoose.Schema(
  {
    metaTitle: { type: String, trim: true, default: "" },
    metaDescription: { type: String, trim: true, default: "" },
    metaKeywords: { type: String, trim: true, default: "" },

    title: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
    },

    longDescription: { type: String, default: "" },

    image: { type: String, trim: true, default: "" },
    imageAlt: { type: String, trim: true, default: "" },

    faqs: { type: [FaqSchema], default: [] },

    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

BlogSchema.index({ title: "text", metaTitle: "text", metaKeywords: "text" });

// Helpful virtual for the read-only public path.
BlogSchema.virtual("url").get(function () {
  return `/blogs/${this.slug}`;
});

BlogSchema.set("toJSON", { virtuals: true });
BlogSchema.set("toObject", { virtuals: true });

// In dev, Next.js hot reload causes the model to be re-registered which
// throws "Cannot overwrite model". Reuse the existing one when present.
const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
