class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :key_color
end
