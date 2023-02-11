class VerificationsController < ApplicationController
    def create
        employee = @current_user
        verifcation = employee.verifcation.create(verifcation_params)
        if verifcation.valid? && (session[:is_employer] === 0)
            render json: verification, status: :created
        else
            render json: { errors: verifcation.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        verifcation = Verification.all
        render json: status: :ok
    end

    def show
        verifcation = Verification.find_by(id: params[:id])
        render json: verifcation, status: :ok
    end

    def update
        employer = @current_user
        verifcation = Verification.find_by(id: params[:id])
        if session[:is_employer] === 1 
            render json: verifcation, status: :created
        else
            render json: { errors: verifcation.errors.full_messages }, status: :unprocessable_entity
        end
    end
end
