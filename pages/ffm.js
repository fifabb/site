import Link from 'next/link'
import Layout from '../components/MyLayout'
import Search from '../components/Search'
import PlayerList from '../components/PlayerList'

import config from '../config'
import database from '../database'

const scoped = resolveScopedStyles(
  <scope>
    <style jsx>{`
      .ffm-player-list {
        margin-top: 20px;
      }
    `}</style>
  </scope>
)

const Page = () => (
  <div className="page-ffm">
    <Search />
    <PlayerList
      className={`ffm-player-list ${scoped.className}`}
      columns={config.list.ffm.columns}
      payload={database.player.ffm}
    />
    <Link href="/ffm/player">
      <a>FIFA Mobile Player</a>
    </Link>
    <style jsx>{`
      .page-ffm {
        padding: 20px 20px 0;
      }
    `}</style>
  </div>
)

function resolveScopedStyles(scope) {
  return {
    className: scope.props.className,
    styles: scope.props.children
  }
}

export default () => (<Layout><Page></Page></Layout>)