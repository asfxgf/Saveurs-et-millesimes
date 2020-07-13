class HomeController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @contact = Home.new(params[:home])
  end

  def create
    @contact = Home.new(params[:home])
    @contact.request = request
    respond_to do |format|
      if @contact.deliver
        # reinitialise pour le form contact
        @contact = Home.new
        format.html { render 'index'}
        format.js   { flash.now[:success] = @message = "Merci pour votre message, nous reviendrons vers vous rapidement !" }
      else
        format.html { render 'index' }
        format.js   { flash.now[:error] = @message = "Message non-envoyé" }
      end
    end
  end
end
