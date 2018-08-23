# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = { name: "Stranger", abcd:"shubham" }
  end
  def adminlogin
  end
   def userlogin
   end
    def admin
    end
    def user
  end
end
