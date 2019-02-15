# coding: utf-8
 
Gem::Specification.new do |spec|
  spec.name          = "jekyll-solace-thme"
  spec.version       = "0.0.1"
  spec.authors       = ["Sam Briesemeister"]
  spec.email         = ["sam.briesemeister@gmail.com"]
 
  spec.summary       = %q{Simple, clean and light theme for Jekyll on GitHub Pages.}
  spec.description   = "Minimal, keeping the content as the focus."
  spec.homepage      = "https://samba.github.io/jekyll-solace-theme"
  spec.license       = "MIT"
 

  # `git ls-files -z`.split("\x0")  # TODO
  spec.files         = `find ./ -type f -print0`.split("\x0").select do |f| 
      f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) 
  end
 
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.5"


  # spec.add_runtime_dependency "jekyll-sitemap", "~> 0.13"
  # spec.add_runtime_dependency "jekyll-mentions", "~> 1.2"
  # spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  # spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.12"
  # spec.add_runtime_dependency "jekyll-default-layout", "~> 0.1"
  # spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  # spec.add_runtime_dependency "jemoji", "~> 0.9"

  spec.add_runtime_dependency "github-pages"
 
  spec.add_development_dependency "jekyll", "~> 3.7"
  spec.add_development_dependency "bundler", "~> 1.17"
  spec.add_development_dependency 'html-proofer', '~> 3.0'
  spec.add_development_dependency 'rubocop', '~> 0.50'
  spec.add_development_dependency 'w3c_validators', '~> 1.3'
end
