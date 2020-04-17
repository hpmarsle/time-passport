class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :key_color, :timers
  # has_many :timers
end
