# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
    # ---2) Defining index method to return all data, assigning instance variable @posts to call upon all posts
    @posts = BlogPost.all
  end

  # ---3) Defining show method to return one piece of data, assigning instance variable @post to call upon single post
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Defining new post 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) post - create - create new data - we're creating a new post (@insancevariable  = Model.create(blog_post_params)) then saying if what we've created has been assigned the appropriate params for @post then we want to navigate to the post page. Else redirect to post creator
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) get - edit (form) we're calling on an existing post to be edited using it's primary key 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)  patch and put - update - modifying data - we're saying update single post with the given parameters. If our update is valid based on the required parameters send us to the post, otherwise redirect to edit
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) delete - destroy - remove data - we're saying on the line below that if our post was not deleted redirect to the post
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)anything under private will not be visible to user
  private
  def blog_post_params
    # ---10) we're saying here that the paramters required to create a blog post are :title, :content
    params.require(:blog_post).permit(:title, :content)
  end
end
