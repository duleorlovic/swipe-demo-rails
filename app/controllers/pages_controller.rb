class PagesController < ApplicationController

  def index
    @pages = Page.all
    @page = params[:page].to_i
  end

  def page
    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.append('elements', partial: 'page', locals: { page: params[:page].to_i })
      end
    end
  end
end
