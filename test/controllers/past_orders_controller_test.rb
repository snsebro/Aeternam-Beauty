require 'test_helper'

class PastOrdersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @past_order = past_orders(:one)
  end

  test "should get index" do
    get past_orders_url, as: :json
    assert_response :success
  end

  test "should create past_order" do
    assert_difference('PastOrder.count') do
      post past_orders_url, params: { past_order: { product_id: @past_order.product_id, user_id: @past_order.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show past_order" do
    get past_order_url(@past_order), as: :json
    assert_response :success
  end

  test "should update past_order" do
    patch past_order_url(@past_order), params: { past_order: { product_id: @past_order.product_id, user_id: @past_order.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy past_order" do
    assert_difference('PastOrder.count', -1) do
      delete past_order_url(@past_order), as: :json
    end

    assert_response 204
  end
end
