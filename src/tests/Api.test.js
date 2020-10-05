import getImages from '../api/Images';

export const mockedImages = { hits: [{ id: '1', largeImageURL: 'url' }] };

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockedImages),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("should fetch images", async () => {
  const images = await getImages("dog");

  expect(images).toEqual(mockedImages);
  expect(fetch).toHaveBeenCalledTimes(1);
});