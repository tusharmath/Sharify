use Rack::Static, 
  :urls => ["/scripts", "/stylesheets"]
  

run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('Index.html', File::RDONLY)
  ]
}