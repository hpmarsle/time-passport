class Api::V1::TimersController < ApplicationController
    def index 
        timers = Timer.all
        
        render json: TimerSerializer.new(timers)
    end

    def show
        timer = Timer.find_by(id: params[:id])
        options = {
            include: [:category]
        }
        render json: TimerSerializer.new(timer, options)

    end

    def create 
        @timer = Timer.create(timer_params)

    end

    private 

    def timer_params
        params.require(:timer).permit(:name, :date, :time_elapsed)
    end
end
