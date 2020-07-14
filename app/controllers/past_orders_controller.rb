class PastOrdersController < ApplicationController
  before_action :set_past_order, only: [:show, :update, :destroy]

  # GET /past_orders
  def index
    @past_orders = PastOrder.all

    render json: @past_orders
  end

  # GET /past_orders/1
  def show
    render json: @past_order
  end

  # POST /past_orders
  def create
    @past_order = PastOrder.new(past_order_params)

    if @past_order.save
      render json: @past_order, status: :created, location: @past_order
    else
      render json: @past_order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /past_orders/1
  def update
    if @past_order.update(past_order_params)
      render json: @past_order
    else
      render json: @past_order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /past_orders/1
  def destroy
    @past_order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_past_order
      @past_order = PastOrder.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def past_order_params
      params.require(:past_order).permit(:user_id, :product_id)
    end
end
