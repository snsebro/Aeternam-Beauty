class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]
  before_action :check_admin, only: [:edit, :create, :delete, :update, :new]

  def check_admin
    unless @current_user.is_admin == true
      redirect_to root_path, error: 'You are not allowed to access this part of the site'
    end
  end

  # GET /products
  def index
    @products = Product.all

    render json: @products, include: :reviews
  end

  # GET /products/1
  def show
    render json: @product, include: :reviews
  end

  # POST /products
  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: :created
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    def set_user
      @user = User.where(is_admin: true, id: parmas[:id])
      puts @user
    end
    # Only allow a trusted parameter "white list" through.
    def product_params
      params.require(:product).permit(:name, :on_sale, :new_in, :product_shot, :alt_shot, :product_details, :price)
    end
end
