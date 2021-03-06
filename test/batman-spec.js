require('should');
import fs from 'fs';
import parse from '../index';

describe('Should Parse Batman\'s Information', () => {
  const source = fs.readFileSync('./data/batman.txt', 'utf8');
  const properties = parse(source, { simplifyDataValues: false });
  it('publisher', () => {
    properties.should.have.property('publisher', 'DC Comics');
  });
  it('hero', () => {
    properties.hero.should.be.true();
  });
  it('partners', () => {
    properties.partners.length.should.equal(5);
    properties.partners.should.containEql('Superman');
  });
  it('aliases', () => {
    properties.aliases.should.containEql('Matches Malone');
    properties.aliases.should.containEql('Lefty Knox');
  });
  it('alliances', () => {
    properties.alliances.should.containEql('Justice League');
    properties.alliances.should.containEql('Batman Incorporated');
  });
  it('powers', () => {
    properties.powers.should.containEql('Expert detective');
    properties.powers.should.containEql('Genius-level intellect');
  });
});
