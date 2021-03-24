class Favorite < ApplicationRecord
    validates :giphy_id, :title, :url, presence: true
    validates :giphy_id, uniqueness: true
end
