class Product < ApplicationRecord
  has_and_belongs_to_many :collections, dependent: :destroy
  has_many :reviews, dependent: :destroy
end
