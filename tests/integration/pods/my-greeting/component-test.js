/**
 * Integration test of the my-greeting component
 */
import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import {beforeEach, describe} from 'mocha'
import hbs from 'htmlbars-inline-precompile'
import {integration} from 'dummy/tests/helpers/ember-test-utils/describe-component'

describeComponent(...integration('my-greeting'), function () {
  describe('when rendereed', function () {
    beforeEach(function () {
      this.set('name', 'Paul')
      this.render(hbs`{{my-greeting name=name}}`)
    })

    it('should render an <h2> tag', function () {
      expect(this.$('h2')).to.have.length(1)
    })

    it('should render the greeting within the <h2> tag', function () {
      expect(this.$('h2').text().trim()).to.equal('Hello, Paul')
    })
  })
})
