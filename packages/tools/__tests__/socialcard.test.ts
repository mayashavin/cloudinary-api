import { buildSocialCard} from '../lib/socialCard'

describe('SocialCard', () => {
  it('should return a card', () => {
    expect(buildSocialCard({
      title: {
        value: 'Deploy a Node.js App to DigitalOcean with SSL',
        font:'futura',
      },
      tagline: {
        value: '#devops #nodejs #ssl',
        font:'futura',
      },
      image: {
        publicId: 'lwj/blog-post-card',
      },
      text: {
        color: '232129',
        width: 760,
      }
    }, {
      cloudName: 'jlengstorf'
    })).toBe('https://res.cloudinary.com/jlengstorf/image/upload/c_fill,w_1280,h_669,q_auto,f_auto/c_fit,w_760,x_480,y_254,g_south_west,l_text:futura_64:Deploy%20a%20Node.js%20App%20to%20DigitalOcean%20with%20SSL,co_rgb:232129/c_fit,w_760,x_480,y_445,g_north_west,l_text:futura_48:%2523devops%20%2523nodejs%20%2523ssl,co_rgb:232129/lwj/blog-post-card')
  });
});