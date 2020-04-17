class TimerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :elapsed_time, :date, :category
  # belongs_to :category

end
