class Api::V1::CategoriesController < ApplicationController
    def index
        categories = Category.all
        render json: CategorySerializer.new(categories)
    end

    def show
        category = Category.find_by(id: params[:id])
        options = {include: [:timers]}
        render json: CategorySerializer.new(category, options)
    end

    def create
        category = Category.create(category_params)
    end 

    private

    def category_params
        params.require(:category).permit(:name, :key_color)
    end
end