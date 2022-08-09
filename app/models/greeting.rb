class Greeting < ApplicationRecord
    validates :text, presence: true
end