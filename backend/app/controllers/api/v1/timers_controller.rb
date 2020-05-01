class Api::V1::TimersController < ApplicationController
    def index 
        timers = Timer.all
        
        render json: TimerSerializer.new(timers)
    end

    def show
        timer = Timer.find_by(id: params[:id])
 
        render json: TimerSerializer.new(timer)

    end

    def create 
        timer = Timer.create(timer_params)
        category = Category.find_by(name: params[:category]) #might need to do name instead? how do I post this from select options on form into the fetch body?
        timer.category = category
        timer.save
        render json: TimerSerializer.new(timer)
    end

    private 

    def timer_params
        params.require(:timer).permit(:name, :date, :elapsed_time, :category)
    end
end
