class JobsController < ApplicationController
    def create
        employee = @current_user
        job = user.jobs.create(job_params)
        if job.valid? && (session[:is_employer] === 0)
            render json: job, status: :created
        else
            render json: {errors: job.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show

    end

    def index

    end


    def destroy
        employee = @current_user
        job = Job.find_by(id: params[:id])
        if employee.id == job.employee_id
            job.delete
            head :no_content
        else
            render json: { errors: ["Not Authorized"]}, status: :unauthorized
        end
    end

    private

    def job_params
        params.permit(:company, :position, :job_duties)
    end
end
