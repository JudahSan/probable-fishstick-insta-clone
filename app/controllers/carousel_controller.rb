class CarouselController < ApplicationController
  def index
    @images = Post.order(created_at: :desc).first.images
  end
end
