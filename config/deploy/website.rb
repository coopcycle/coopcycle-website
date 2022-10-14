set :repo_url, 'git@github.com:coopcycle/coopcycle-website.git'
set :branch, 'master'

set :application, 'website'
set :deploy_to, '/var/www/website'

server 'web03.coopcycle.org', user: 'coopcycle', roles: %w{web}

namespace :deploy do

  desc 'Compile theme'
  task :compile_theme do
    on roles(:web) do
      within release_path do
        within 'themes/coopcycle' do
          execute :npm, 'ci'
          execute :npm, 'run', 'build'
          execute :npm, 'prune'
        end
      end
    end
  end

  desc 'Hugo'
  task :hugo do
    on roles(:web) do
      within release_path do
        execute :hugo
      end
    end
  end

  after :updated, 'compile_theme'
  after :updated, 'hugo'

end
