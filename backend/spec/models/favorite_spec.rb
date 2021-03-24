require 'rails_helper'

RSpec.describe Favorite, type: :model do
  subject {
      described_class.new(giphy_id: "Anything", title: "Anything", url: "www.anything.com")
    }
    
  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a giphy id" do
    subject.giphy_id = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a title" do
    subject.title = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a url" do
    subject.url = nil
    expect(subject).to_not be_valid
  end
end
