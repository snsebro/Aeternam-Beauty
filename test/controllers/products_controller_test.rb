require 'test_helper'

class ProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @product = products(:one)
  end

  test "should get index" do
    get products_url, as: :json
    assert_response :success
  end

  test "should create product" do
    assert_difference('Product.count') do
      post products_url, params: { product: { alt_shot: @product.alt_shot, name: @product.name, new_in: @product.new_in, on_sale: @product.on_sale, price: @product.price, product_details: @product.product_details, product_shot: @product.product_shot } }, as: :json
    end

    assert_response 201
  end

  test "should show product" do
    get product_url(@product), as: :json
    assert_response :success
  end

  test "should update product" do
    patch product_url(@product), params: { product: { alt_shot: @product.alt_shot, name: @product.name, new_in: @product.new_in, on_sale: @product.on_sale, price: @product.price, product_details: @product.product_details, product_shot: @product.product_shot } }, as: :json
    assert_response 200
  end

  test "should destroy product" do
    assert_difference('Product.count', -1) do
      delete product_url(@product), as: :json
    end

    assert_response 204
  end
end
