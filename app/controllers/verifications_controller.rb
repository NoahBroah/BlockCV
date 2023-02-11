class VerificationsController < ApplicationController
    def create
        employee = @current_user
        verification = employee.verifications.create(verification_params)
        if verification.valid? && (session[:is_employer] === 0)
            render json: verification, status: :created
        else
            render json: { errors: verification.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        verification = Verification.all
        render json: verification, status: :ok
    end

    def show
        verification = Verification.find_by(id: params[:id])
        render json: verification, status: :ok
    end

    def update
        employer = @current_user
        verification = Verification.find_by(id: params[:id])
        if session[:is_employer] === 1 
            render json: verification, status: :created
        else
            render json: { errors: verification.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def verification_params
        params.permit(:is_verified, :verification)
    end
end
