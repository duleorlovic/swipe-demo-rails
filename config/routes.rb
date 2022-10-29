Rails.application.routes.draw do
  root to: 'pages#index'
  get "page", controller: "pages"
  post "page", controller: "pages"
end
