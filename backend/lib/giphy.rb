class Giphy
    include HTTParty
    base_uri 'api.giphy.com/v1/gifs'
    format :json
    
    attr_reader :api_key
    
    def initialize(api_key)
        @api_key = api_key
    end

    def search(term)
        url = "/search?q=#{term}&api_key=#{@api_key}"
        request url
    end

    private

    def request(url)
        self.class.get url
    rescue StandardError => e
        puts "An error has occurred: #{e.message}"
    end
end