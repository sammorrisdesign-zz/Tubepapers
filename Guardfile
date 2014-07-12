# guard init shell

# Compile article template styles (minified)
guard 'sass', :syntax => :scss, :style => :compressed do
    watch(%r{css/.+\.scss})
end
# Sass Lint
guard :shell do
    watch(%r{css/.+\.scss}) {
        |m| eager 'scss-lint css'
    }
end

# JS Lint
guard 'jslint-on-rails' do
    watch(%r{js/.+})
end