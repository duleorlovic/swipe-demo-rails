class PagesController < ApplicationController

  def index
    @pages = Page.all
    @page = params[:page].to_i
  end

end