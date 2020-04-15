class TimerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :elapsed_time, :date, :category_id
end
