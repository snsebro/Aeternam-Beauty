class User < ApplicationRecord
  has_secure_password
  # validates :password, length: { minimum: 6 }, on: :create
  validates :password, presence:true, on: :create
  validates :username, presence: true, uniqueness: true
  
  has_many :reviews, dependent: :destroy
  has_many :past_orders, dependent: :destroy
end
